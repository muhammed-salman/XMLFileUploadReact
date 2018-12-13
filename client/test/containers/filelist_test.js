import { renderComponent , expect } from '../test_helper';
import FileList from '../../src/containers/FileList';
// import {getAllFiles, viewFile} from '../../src/actions';

describe('FileList' , () => {
  let component;
  // let allFiles=[
  //   {
  //     "_id": "5c114f259c9ef17850c1bdbb",
  //     "hash": "3341a665921b3279c2239c2e49479f02",
  //     "timeStamp": "Wed Dec 12 2018 23:40:45 GMT+0530 (IST)",
  //     "xmlFileString": "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZlaGljbGVzPgogIDx2ZWhpY2xlPgogICAgPGlkPnZlaGljbGUgMTwvaWQ+CiAgICA8ZnJhbWU+CiAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPmxlZnQgcmVhcjwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJpZ2h0IHJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgICAgPHdoZWVsPgogICAgICAgIDxwb3NpdGlvbj5mcm9udDwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgPC93aGVlbHM+CiAgICA8cG93ZXJ0cmFpbj5odW1hbjwvcG93ZXJ0cmFpbj4KICA8L3ZlaGljbGU+CiAgPHZlaGljbGU+CiAgICA8aWQ+dmVoaWNsZSAyPC9pZD4KICAgIDxmcmFtZT4KICAgICAgPG1hdGVyaWFsPm1ldGFsPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+ZnJvbnQ8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICA8L3doZWVscz4KICAgIDxwb3dlcnRyYWluPmh1bWFuPC9wb3dlcnRyYWluPgogIDwvdmVoaWNsZT4KPC92ZWhpY2xlcz4K",
  //     "fileAttr": {
  //       "name": "vehicle.xml",
  //       "lastModified": 1544361584022,
  //       "size": 909,
  //       "type": "text/xml"
  //     },
  //     "__v": 0,
  //     "vehicles": [
  //       {
  //         "id": "vehicle 1",
  //         "powertrain": "human",
  //         "_id": "5c114f259c9ef17850c1bdbf",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "left rear",
  //               "material": "plastic",
  //               "_id": "5c114f259c9ef17850c1bdc2"
  //             },
  //             {
  //               "position": "right rear",
  //               "material": "plastic",
  //               "_id": "5c114f259c9ef17850c1bdc1"
  //             },
  //             {
  //               "position": "front",
  //               "material": "plastic",
  //               "_id": "5c114f259c9ef17850c1bdc0"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "plastic"
  //         }
  //       },
  //       {
  //         "id": "vehicle 2",
  //         "powertrain": "human",
  //         "_id": "5c114f259c9ef17850c1bdbc",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "rear",
  //               "material": "metal",
  //               "_id": "5c114f259c9ef17850c1bdbe"
  //             },
  //             {
  //               "position": "front",
  //               "material": "metal",
  //               "_id": "5c114f259c9ef17850c1bdbd"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "metal"
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     "_id": "5c114f5b9c9ef17850c1bdc3",
  //     "hash": "a179123efdf46573a98edc428f55e349",
  //     "timeStamp": "Wed Dec 12 2018 23:41:39 GMT+0530 (IST)",
  //     "xmlFileString": "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZlaGljbGVzPgogIDx2ZWhpY2xlPgogICAgPGlkPnZlaGljbGUgMzwvaWQ+CiAgICA8ZnJhbWU+CiAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPmxlZnQgcmVhcjwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJpZ2h0IHJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgICAgPHdoZWVsPgogICAgICAgIDxwb3NpdGlvbj5mcm9udDwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgPC93aGVlbHM+CiAgICA8cG93ZXJ0cmFpbj5odW1hbjwvcG93ZXJ0cmFpbj4KICA8L3ZlaGljbGU+CiAgPHZlaGljbGU+CiAgICA8aWQ+dmVoaWNsZSA0PC9pZD4KICAgIDxmcmFtZT4KICAgICAgPG1hdGVyaWFsPm1ldGFsPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+ZnJvbnQ8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICA8L3doZWVscz4KICAgIDxwb3dlcnRyYWluPmh1bWFuPC9wb3dlcnRyYWluPgogIDwvdmVoaWNsZT4KPC92ZWhpY2xlcz4K",
  //     "fileAttr": {
  //       "name": "vehicle2.xml",
  //       "lastModified": 1544600445671,
  //       "size": 909,
  //       "type": "text/xml"
  //     },
  //     "__v": 0,
  //     "vehicles": [
  //       {
  //         "id": "vehicle 3",
  //         "powertrain": "human",
  //         "_id": "5c114f5b9c9ef17850c1bdc7",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "left rear",
  //               "material": "plastic",
  //               "_id": "5c114f5b9c9ef17850c1bdca"
  //             },
  //             {
  //               "position": "right rear",
  //               "material": "plastic",
  //               "_id": "5c114f5b9c9ef17850c1bdc9"
  //             },
  //             {
  //               "position": "front",
  //               "material": "plastic",
  //               "_id": "5c114f5b9c9ef17850c1bdc8"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "plastic"
  //         }
  //       },
  //       {
  //         "id": "vehicle 4",
  //         "powertrain": "human",
  //         "_id": "5c114f5b9c9ef17850c1bdc4",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "rear",
  //               "material": "metal",
  //               "_id": "5c114f5b9c9ef17850c1bdc6"
  //             },
  //             {
  //               "position": "front",
  //               "material": "metal",
  //               "_id": "5c114f5b9c9ef17850c1bdc5"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "metal"
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     "_id": "5c114f689c9ef17850c1bdcb",
  //     "hash": "8a6afecc59d87f786f2873b004ba8c76",
  //     "timeStamp": "Wed Dec 12 2018 23:41:52 GMT+0530 (IST)",
  //     "xmlFileString": "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZlaGljbGVzPgogIDx2ZWhpY2xlPgogICAgPGlkPnZlaGljbGUgNDwvaWQ+CiAgICA8ZnJhbWU+CiAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPmxlZnQgcmVhcjwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJpZ2h0IHJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgICAgPHdoZWVsPgogICAgICAgIDxwb3NpdGlvbj5mcm9udDwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgPC93aGVlbHM+CiAgICA8cG93ZXJ0cmFpbj5odW1hbjwvcG93ZXJ0cmFpbj4KICA8L3ZlaGljbGU+CiAgPHZlaGljbGU+CiAgICA8aWQ+dmVoaWNsZSA1PC9pZD4KICAgIDxmcmFtZT4KICAgICAgPG1hdGVyaWFsPm1ldGFsPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+ZnJvbnQ8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICA8L3doZWVscz4KICAgIDxwb3dlcnRyYWluPmh1bWFuPC9wb3dlcnRyYWluPgogIDwvdmVoaWNsZT4KICA8dmVoaWNsZT4KICAgIDxpZD52ZWhpY2xlIDY8L2lkPgogICAgPGZyYW1lPgogICAgICA8bWF0ZXJpYWw+cGxhc3RpYzwvbWF0ZXJpYWw+CiAgICA8L2ZyYW1lPgogICAgPHdoZWVscz4KICAgIDwvd2hlZWxzPgogICAgPHBvd2VydHJhaW4+YmVybm91bGxpPC9wb3dlcnRyYWluPgogIDwvdmVoaWNsZT4KICA8dmVoaWNsZT4KICAgIDxpZD52ZWhpY2xlIDc8L2lkPgogICAgPGZyYW1lPgogICAgICA8bWF0ZXJpYWw+bWV0YWw8L21hdGVyaWFsPgogICAgPC9mcmFtZT4KICAgIDx3aGVlbHM+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+bGVmdCByZWFyPC9wb3NpdGlvbj4KICAgICAgICA8bWF0ZXJpYWw+bWV0YWw8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJpZ2h0IHJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+bGVmdCBmcm9udDwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPm1ldGFsPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgICAgPHdoZWVsPgogICAgICAgIDxwb3NpdGlvbj5yaWdodCBmcm9udDwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPm1ldGFsPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgIDwvd2hlZWxzPgogICAgPHBvd2VydHJhaW4+aW50ZXJuYWwgY29tYnVzdGlvbjwvcG93ZXJ0cmFpbj4KICA8L3ZlaGljbGU+CjwvdmVoaWNsZXM+Cg==",
  //     "fileAttr": {
  //       "name": "vehicle3.xml",
  //       "lastModified": 1544638202337,
  //       "size": 1681,
  //       "type": "text/xml"
  //     },
  //     "__v": 0,
  //     "vehicles": [
  //       {
  //         "id": "vehicle 4",
  //         "powertrain": "human",
  //         "_id": "5c114f689c9ef17850c1bdd5",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "left rear",
  //               "material": "plastic",
  //               "_id": "5c114f689c9ef17850c1bdd8"
  //             },
  //             {
  //               "position": "right rear",
  //               "material": "plastic",
  //               "_id": "5c114f689c9ef17850c1bdd7"
  //             },
  //             {
  //               "position": "front",
  //               "material": "plastic",
  //               "_id": "5c114f689c9ef17850c1bdd6"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "plastic"
  //         }
  //       },
  //       {
  //         "id": "vehicle 5",
  //         "powertrain": "human",
  //         "_id": "5c114f689c9ef17850c1bdd2",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "rear",
  //               "material": "metal",
  //               "_id": "5c114f689c9ef17850c1bdd4"
  //             },
  //             {
  //               "position": "front",
  //               "material": "metal",
  //               "_id": "5c114f689c9ef17850c1bdd3"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "metal"
  //         }
  //       },
  //       {
  //         "id": "vehicle 6",
  //         "powertrain": "bernoulli",
  //         "_id": "5c114f689c9ef17850c1bdd1",
  //         "wheels": {
  //           "wheel": []
  //         },
  //         "frame": {
  //           "material": "plastic"
  //         }
  //       },
  //       {
  //         "id": "vehicle 7",
  //         "powertrain": "internal combustion",
  //         "_id": "5c114f689c9ef17850c1bdcc",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "left rear",
  //               "material": "metal",
  //               "_id": "5c114f689c9ef17850c1bdd0"
  //             },
  //             {
  //               "position": "right rear",
  //               "material": "metal",
  //               "_id": "5c114f689c9ef17850c1bdcf"
  //             },
  //             {
  //               "position": "left front",
  //               "material": "metal",
  //               "_id": "5c114f689c9ef17850c1bdce"
  //             },
  //             {
  //               "position": "right front",
  //               "material": "metal",
  //               "_id": "5c114f689c9ef17850c1bdcd"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "metal"
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     "_id": "5c114fff9c9ef17850c1bdd9",
  //     "hash": "ad5bcb518d523ee3f004fe2e2c0bb336",
  //     "timeStamp": "Wed Dec 12 2018 23:44:23 GMT+0530 (IST)",
  //     "xmlFileString": "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZlaGljbGVzPgogIDx2ZWhpY2xlPgogICAgPGlkPnZlaGljbGUgODwvaWQ+CiAgICA8ZnJhbWU+CiAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgICAgPHdoZWVsPgogICAgICAgIDxwb3NpdGlvbj5mcm9udDwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPnBsYXN0aWM8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPmZyb250PC9wb3NpdGlvbj4KICAgICAgICA8bWF0ZXJpYWw+cGxhc3RpYzwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICA8L3doZWVscz4KICAgIDxwb3dlcnRyYWluPmh1bWFuPC9wb3dlcnRyYWluPgogIDwvdmVoaWNsZT4KICA8dmVoaWNsZT4KICAgIDxpZD52ZWhpY2xlIDk8L2lkPgogICAgPGZyYW1lPgogICAgICA8bWF0ZXJpYWw+bWV0YWw8L21hdGVyaWFsPgogICAgPC9mcmFtZT4KICAgIDx3aGVlbHM+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+cmVhcjwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPm1ldGFsPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgICAgPHdoZWVsPgogICAgICAgIDxwb3NpdGlvbj5mcm9udDwvcG9zaXRpb24+CiAgICAgICAgPG1hdGVyaWFsPm1ldGFsPC9tYXRlcmlhbD4KICAgICAgPC93aGVlbD4KICAgIDwvd2hlZWxzPgogICAgPHBvd2VydHJhaW4+aW50ZXJuYWwgY29tYnVzdGlvbjwvcG93ZXJ0cmFpbj4KICA8L3ZlaGljbGU+CiAgPHZlaGljbGU+CiAgICA8aWQ+dmVoaWNsZSAxMDwvaWQ+CiAgICA8ZnJhbWU+CiAgICAgIDxtYXRlcmlhbD5wbGFzdGljPC9tYXRlcmlhbD4KICAgIDwvZnJhbWU+CiAgICA8d2hlZWxzPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPmZyb250PC9wb3NpdGlvbj4KICAgICAgICA8bWF0ZXJpYWw+cGxhc3RpYzwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICA8L3doZWVscz4KICAgIDxwb3dlcnRyYWluPmJlcm5vdWxsaTwvcG93ZXJ0cmFpbj4KICA8L3ZlaGljbGU+CiAgPHZlaGljbGU+CiAgICA8aWQ+dmVoaWNsZSAxMTwvaWQ+CiAgICA8ZnJhbWU+CiAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICA8L2ZyYW1lPgogICAgPHdoZWVscz4KICAgICAgPHdoZWVsPgogICAgICAgIDxwb3NpdGlvbj5yZWFyPC9wb3NpdGlvbj4KICAgICAgICA8bWF0ZXJpYWw+bWV0YWw8L21hdGVyaWFsPgogICAgICA8L3doZWVsPgogICAgICA8d2hlZWw+CiAgICAgICAgPHBvc2l0aW9uPnJpZ2h0IHJlYXI8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+ZnJvbnQ8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICAgIDx3aGVlbD4KICAgICAgICA8cG9zaXRpb24+cmlnaHQgZnJvbnQ8L3Bvc2l0aW9uPgogICAgICAgIDxtYXRlcmlhbD5tZXRhbDwvbWF0ZXJpYWw+CiAgICAgIDwvd2hlZWw+CiAgICA8L3doZWVscz4KICAgIDxwb3dlcnRyYWluPmludGVybmFsIGNvbWJ1c3Rpb248L3Bvd2VydHJhaW4+CiAgPC92ZWhpY2xlPgo8L3ZlaGljbGVzPgo=",
  //     "fileAttr": {
  //       "name": "vehicleUnknown.xml",
  //       "lastModified": 1544638457811,
  //       "size": 1778,
  //       "type": "text/xml"
  //     },
  //     "__v": 0,
  //     "vehicles": [
  //       {
  //         "id": "vehicle 8",
  //         "powertrain": "human",
  //         "_id": "5c114fff9c9ef17850c1bde4",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "rear",
  //               "material": "plastic",
  //               "_id": "5c114fff9c9ef17850c1bde7"
  //             },
  //             {
  //               "position": "front",
  //               "material": "plastic",
  //               "_id": "5c114fff9c9ef17850c1bde6"
  //             },
  //             {
  //               "position": "front",
  //               "material": "plastic",
  //               "_id": "5c114fff9c9ef17850c1bde5"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "plastic"
  //         }
  //       },
  //       {
  //         "id": "vehicle 9",
  //         "powertrain": "internal combustion",
  //         "_id": "5c114fff9c9ef17850c1bde1",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "rear",
  //               "material": "metal",
  //               "_id": "5c114fff9c9ef17850c1bde3"
  //             },
  //             {
  //               "position": "front",
  //               "material": "metal",
  //               "_id": "5c114fff9c9ef17850c1bde2"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "metal"
  //         }
  //       },
  //       {
  //         "id": "vehicle 10",
  //         "powertrain": "bernoulli",
  //         "_id": "5c114fff9c9ef17850c1bddf",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "front",
  //               "material": "plastic",
  //               "_id": "5c114fff9c9ef17850c1bde0"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "plastic"
  //         }
  //       },
  //       {
  //         "id": "vehicle 11",
  //         "powertrain": "internal combustion",
  //         "_id": "5c114fff9c9ef17850c1bdda",
  //         "wheels": {
  //           "wheel": [
  //             {
  //               "position": "rear",
  //               "material": "metal",
  //               "_id": "5c114fff9c9ef17850c1bdde"
  //             },
  //             {
  //               "position": "right rear",
  //               "material": "metal",
  //               "_id": "5c114fff9c9ef17850c1bddd"
  //             },
  //             {
  //               "position": "front",
  //               "material": "metal",
  //               "_id": "5c114fff9c9ef17850c1bddc"
  //             },
  //             {
  //               "position": "right front",
  //               "material": "metal",
  //               "_id": "5c114fff9c9ef17850c1bddb"
  //             }
  //           ]
  //         },
  //         "frame": {
  //           "material": "metal"
  //         }
  //       }
  //     ]
  //   }
  // ];

  beforeEach(() => {
    component = renderComponent(FileList,{});
  });

  it('renders FileList component', () => {
    expect(component).to.exist;
  });

});
