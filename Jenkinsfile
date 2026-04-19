pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Abisha-Rebekkal21/docker-integration-project.git'
            }
        }

        stage('Build & Test') {
            steps {
                bat 'docker-compose up --build'
            }
        }

        stage('Cleanup') {
            steps {
                bat 'docker-compose down'
            }
        }
    }

    post {
        success {
            echo '✅ Build Successful'
        }
        failure {
            echo '❌ Build Failed'
        }
    }
}