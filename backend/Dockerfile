FROM python:3.12.1-alpine

ENV PIP_DISABLE_PIP_VERSION_CHECK=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONBUFFERED=1

WORKDIR /api

RUN apk update && \
    apk add --no-cache python3-dev \
    gcc \
    musl-dev \
    libpq-dev

COPY . .

RUN python -m pip install --upgrade pip && \
    pip install -r requirements.txt

