# Simple Weather App

간단한 날씨 검색기

## 구현 내용

- 원하는 지역을 검색하면 간단한 날씨 정보 화면이 나타는 앱

## 구현 스택

- Frontend : React / styled components
- backend : https://github.com/robertoduessmann/weather-api 를 docker로 실행 (Dockerfile)

### Backend 구축

[https://github.com/robertoduessmann/weather-api](https://github.com/robertoduessmann/weather-api)

- 간단한 날씨 정보를 출력해주는 golang 기반 api
  - response 예제
    ```json
    {
      "temperature": "29 °C",
      "wind": "20 km/h",
      "description": "Partly cloudy",
      "forecast": [
        {
          "day": 1,
          "temperature": "27 °C",
          "wind": "12 km/h"
        },
        {
          "day": 2,
          "temperature": "22 °C",
          "wind": "8 km/h"
        }
      ]
    }
    ```
- 소스코드를 빌드(`go build`)하여 빌드된 실행파일을 실행하면 포트3000번으로 api를 호출 할 수 있음
  - Usage
    ```powershell
    curl http://localhost:3000/weather/seoul
    ```
- Dockerfile 구조
  - golang 기반 소스이기 때문에 베이스 이미지를 `golang:latest`
  - go-dep 설치
  - git을 설치 한 후 소스코드를 클론
  - 소스코드를 빌드한 후 빌드 결과물 실행
- Docker 실행
  - 소스코드에 포트 번호가 3000번으로 설정되어 있으나, `react-create-app` 의 기본 포트가 3000번이기 때문에 5000번으로 포트를 바인딩
  ```powershell
  docker run --name weatherapi -p 5000:3000 --rm -d weather-api
  ```

### Frontend 구축

- Pages
  - Home : 지역을 검색할 수 있는 인풋과 버튼
  - Weather/:region : `:region` 파라미터로 검색한 날씨 정보 출력
  - ErrorPage : Home 화면으로 이동
- style : styled-components를 간단하게 활용
- icon 번들 : @ant-design/icons, weather-icons-react 사용
- 부가 기능
  - 데이터를 성공적으로 받아온 검색어 로컬 저장(5개)
  - 저장된 검색어 바로 접근
