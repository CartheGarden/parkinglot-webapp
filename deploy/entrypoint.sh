#!/bin/sh

mkdir -p /data/log

exec nginx -c /app/deploy/nginx.conf
