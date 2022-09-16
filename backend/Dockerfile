FROM golang:latest

USER root

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install git -y

RUN go env -w GO111MODULE=auto
RUN go get -u github.com/golang/dep/cmd/dep

WORKDIR /go/src/app

RUN git clone https://github.com/robertoduessmann/weather-api.git

WORKDIR /go/src/app/weather-api

RUN dep ensure
RUN go build

CMD [ "./weather-api" ]
