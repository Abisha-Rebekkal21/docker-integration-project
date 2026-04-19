pipeline {
    agent any

    stages {

        stage('Build & Test') {
            steps {
                sh 'docker-compose up --build --abort-on-container-exit'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker-compose down'
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