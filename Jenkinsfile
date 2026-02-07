pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build App Image') {
            steps {
                sh '''
                  docker build -t mobile-web:ci .
                '''
            }
        }
    }
}
