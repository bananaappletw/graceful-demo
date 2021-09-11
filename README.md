# graceful shutdown test

## Create local Kubernetes cluster

    kind create cluster

## Run Skaffold

    skaffold dev

## Test behavior

Randomly delete one pod and monitor the log

```
[server] 9/13/2021, 5:31:51 AM: server-887d7c856-b27gr receive SIGTERM
[server] 9/13/2021, 5:31:51 AM: server-887d7c856-b27gr receive request
[server] 9/13/2021, 5:31:53 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:31:55 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:31:57 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:31:57 AM: server-887d7c856-b27gr receive health check
[server] 9/13/2021, 5:31:57 AM: server-887d7c856-np4dd receive health check
[server] 9/13/2021, 5:31:58 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:00 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:01 AM: server-887d7c856-rdqkq receive health check
[server] 9/13/2021, 5:32:02 AM: server-887d7c856-rdqkq receive request
[server] 9/13/2021, 5:32:04 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:05 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:06 AM: server-887d7c856-rdqkq receive request
[server] 9/13/2021, 5:32:07 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:07 AM: server-887d7c856-b27gr receive health check
[server] 9/13/2021, 5:32:07 AM: server-887d7c856-np4dd receive health check
[server] 9/13/2021, 5:32:08 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:09 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:10 AM: server-887d7c856-rdqkq receive request
[server] 9/13/2021, 5:32:11 AM: server-887d7c856-rdqkq receive health check
[server] 9/13/2021, 5:32:12 AM: server-887d7c856-rdqkq receive request
[server] 9/13/2021, 5:32:13 AM: server-887d7c856-rdqkq receive request
[server] 9/13/2021, 5:32:14 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:15 AM: server-887d7c856-rdqkq receive request
[server] 9/13/2021, 5:32:16 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:17 AM: server-887d7c856-np4dd receive request
[server] 9/13/2021, 5:32:17 AM: server-887d7c856-b27gr receive health check
[server] 9/13/2021, 5:32:17 AM: server-887d7c856-np4dd receive health check
[server] 9/13/2021, 5:32:18 AM: server-887d7c856-rdqkq receive request
```

## Cleanup kind

    kind delete cluster