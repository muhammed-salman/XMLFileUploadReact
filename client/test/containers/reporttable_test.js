import { renderComponent , expect } from '../test_helper';
import ReportTable from '../../src/containers/ReportTable';

describe('ReportTable' , () => {
  let component;
  let props={
    "currentFile": {},
    "displayFile": {
      "_id": "5c114f259c9ef17850c1bdbb",
      "hash": "3341a665921b3279c2239c2e49479f02",
      "timeStamp": "Wed Dec 12 2018 23:40:45 GMT+0530 (IST)",
      "xmlFileString": "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZlaGljbGVzPgogIDx2ZWhpY2xlPgogICAgPGlkPnZlaGljbGUgMTwvaWQ+CiAgICA8ZnJhbWU+CiAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPmxlZnQgcmVhcjwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJpZ2h0IHJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgICAgPHdoZWVsPgogICAgICAgIDxwb3NpdGlvbj5mcm9udDwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgPC93aGVlbHM+CiAgICA8cG93ZXJ0cmFpbj5odW1hbjwvcG93ZXJ0cmFpbj4KICA8L3ZlaGljbGU+CiAgPHZlaGljbGU+CiAgICA8aWQ+dmVoaWNsZSAyPC9pZD4KICAgIDxmcmFtZT4KICAgICAgPG1hdGVyaWFsPm1ldGFsPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+ZnJvbnQ8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICA8L3doZWVscz4KICAgIDxwb3dlcnRyYWluPmh1bWFuPC9wb3dlcnRyYWluPgogIDwvdmVoaWNsZT4KPC92ZWhpY2xlcz4K",
      "fileAttr": {
        "name": "vehicle.xml",
        "lastModified": 1544361584022,
        "size": 909,
        "type": "text/xml"
      },
      "__v": 0,
      "vehicles": [
        {
          "id": "vehicle 1",
          "powertrain": "human",
          "_id": "5c114f259c9ef17850c1bdbf",
          "wheels": {
            "wheel": [
              {
                "position": "left rear",
                "material": "plastic",
                "_id": "5c114f259c9ef17850c1bdc2"
              },
              {
                "position": "right rear",
                "material": "plastic",
                "_id": "5c114f259c9ef17850c1bdc1"
              },
              {
                "position": "front",
                "material": "plastic",
                "_id": "5c114f259c9ef17850c1bdc0"
              }
            ]
          },
          "frame": {
            "material": "plastic"
          }
        },
        {
          "id": "vehicle 2",
          "powertrain": "human",
          "_id": "5c114f259c9ef17850c1bdbc",
          "wheels": {
            "wheel": [
              {
                "position": "rear",
                "material": "metal",
                "_id": "5c114f259c9ef17850c1bdbe"
              },
              {
                "position": "front",
                "material": "metal",
                "_id": "5c114f259c9ef17850c1bdbd"
              }
            ]
          },
          "frame": {
            "material": "metal"
          }
        }
      ]
    }
  };


  beforeEach(() => {
    component = renderComponent(ReportTable,props);
  });

  it('renders ReportTable component', () => {
    expect(component).to.exist;
  });

});
