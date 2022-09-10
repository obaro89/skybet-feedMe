
# Skybet and Gaming FeedMe Task

This application connects to the skybet mock feeds provider, transforms the data and store in a nosql database.
This project utilises  (Kafka) as a queue system, docker for containerization.



## Technologies

- React (Frontend)
- Node (Javascript runtime environment)
- Mongo (noSQL database)
- Kafka (A distributed event streaming technology using for building scalable and robust event driven microservices)
- Docker (A software platform that allows you to build, test, and deploy applications quickly. Docker applications run in containers that can be used on any system)


## Deployment

To deploy this project, clone this repo using the command below

```bash
  git clone https://github.com/obaro89/skybet-feedMe.git
```

Open your terminal and run the following command. You will need to have Docker install
```bash
  docker-compose -up
```