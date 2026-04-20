pipeline {
    agent any

    stages {
        stage('Build & Test') {
            steps {
                bat 'docker-compose up --build --abort-on-container-exit'
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
            echo 'Test execute Successful'
        }
        failure {
            echo 'Test Failed'
        }
    }
}