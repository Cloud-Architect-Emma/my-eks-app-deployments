# ** Microservices DevOps Project **
[!GitHub] [!GitHub Action] [![Docker] [![Pulls Helm Version] [!Heelm] [!ArgoCD] [!Terraform] [!Splunk] [!Slack] [!EKS] [![License: MIT]

A scalable microservices application built with modern DevOps practices, leveraging containerization, Kubernetes orchestration, CI/CD pipelines, and comprehensive monitoring/logging.

## Overview
This project demonstrates a full-stack microservices architecture deployed on AWS EKS. It includes multiple services (e.g., API gateway, user service, product service) that communicate via REST APIs. The setup emphasizes security, observability, and automated deployments using GitOps principles.


## Architecture

![Architecture Diagram](architecture/Architecture-Diagram.JPG)



## Key features:

Microservices: Modular, independently deployable services.
CI/CD: Automated builds, scans, and deployments via GitHub Actions.
Security: Integrated vulnerability scanning with Trivy and code quality checks with SonarQube.
Monitoring: Real-time metrics with Prometheus and visualization via Grafana.
Logging: Centralized logging with Splunk.
Containerization: Docker-based images hosted on Docker Hub.
Technologies Used
Version Control: GitHub
Containerization: Docker, Docker Hub
Orchestration: Kubernetes (EKS), Helm
CI/CD: GitHub Actions (Docker workflows)
GitOps: ArgoCD
Cloud: AWS (EKS)
Security Scanning: Trivy, SonarQube
Monitoring: Prometheus, Grafana
Logging: Splunk
Architecture
The application consists of the following microservices:

API Gateway: Handles routing and authentication.
User Service: Manages user data and authentication.
Product Service: Handles product inventory and orders.
Notification Service: Sends emails/SMS notifications.
Services are containerized with Docker and deployed to EKS using Helm charts. ArgoCD manages GitOps deployments from GitHub repositories.


[GitHub] -> [GitHub Actions] -> [Docker Build/Push] -> [Docker Hub]
                                      |
                                      v
[ArgoCD] <- [Helm Charts] <- [EKS Cluster]
                                      |
                                      v
[Prometheus/Grafana] <- [Monitoring] | [Splunk] <- [Logging]

## Prerequisites
Docker (v20+)
Kubernetes CLI (kubectl)
Helm (v3+)
AWS CLI configured with EKS access
GitHub account for CI/CD
SonarQube server (for code analysis)
Splunk instance (for logging)
Installation
Clone the Repository:


```
git clone https://github.com/your-username/your-repo.git
cd your-repo
Build and Push Docker Images:
```

```
docker build -t your-username/api-gateway:latest ./services/api-gateway
docker push your-username/api-gateway:latest
# Repeat for other services
Deploy to EKS:
```
Update Helm values in charts/ with your configurations.
Install via Helm:
```

```
helm install my-app ./charts
Set Up ArgoCD:

Install ArgoCD on EKS.
Create an application pointing to this repo's charts/ directory.
Configure Monitoring:

Deploy Prometheus and Grafana using Helm:
```

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/prometheus
helm install grafana stable/grafana
Integrate Splunk:

Configure Splunk HEC (HTTP Event Collector) in your services for log forwarding.
Usage
Local Development: Run services with Docker Compose:
```

```
docker-compose up
Access the App: Once deployed, access via the EKS load balancer URL (e.g., http://api-gateway.example.com).

Monitoring Dashboard: Open Grafana at http://grafana.example.com (default credentials: admin/admin).

CI/CD: Push to the main branch to trigger GitHub Actions, which builds, scans, and deploys via ArgoCD.

```
Helm Chart Snippet (values.yaml):
```

```
image:
  repository: your-username/user-service
  tag: latest
replicaCount: 3
Contributing
Fork the repo.
Create a feature branch: git checkout -b feature/new-service.
Commit changes: git commit -m 'Add new service'.
Push and open a PR.
Ensure code passes SonarQube scans and Trivy security checks.
```

License
This project is licensed under the MIT License - see the LICENSE file for details.

For issues or questions, open a GitHub issue.
