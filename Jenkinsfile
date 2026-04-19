pipeline {
    agent any

    stages {
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