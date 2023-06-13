from collections import namedtuple

import pytest as pytest
from fastapi.testclient import TestClient

from main import app

client = TestClient(app)


def test_root():
    response = client.get("/")
    assert response.status_code == 200
    jsn = response.json()
    assert 'message' in jsn
    assert jsn['message']


NameParams = namedtuple('NameParams', ['return_code', 'name', 'response_dict'])


@pytest.fixture(scope="function", params=[NameParams(404, '', {'detail': 'Not Found'}),
                                          NameParams(200, 'String', {'message': 'Hello String'}),
                                          NameParams(422, '$%WN',
                                                     {'detail':
                                                          [{'ctx': {'pattern': '^[a-zA-Z0-9_]*$'},
                                                            'loc': ['path', 'name'],
                                                            'msg': 'string does not match regex "^[a-zA-Z0-9_]*$"',
                                                            'type': 'value_error.str.regex'}]
                                                      }
),
                                          NameParams(200, 'A'*100, {'message': f'Hello {"A"*100}'})],
                ids=['Empty string', 'Valid string', "Numbers and symbols", 'Large string'])
def name_data(request):
    return request.param


def test_root_hello_name(name_data: NameParams):
    response = client.get(f"/example_path_operation/{name_data.name}")
    assert response.status_code == name_data.return_code
    assert response.json() == name_data.response_dict
