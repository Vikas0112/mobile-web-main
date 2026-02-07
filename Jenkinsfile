pipeline {
    agent any

    stages {
        stage('Check Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build Image') {
            steps {
                sh '''
                  cd /var/jenkins_home/workspace/mobile-web-ci
                  docker build -t mobile-web:ci .
                '''
            }
        }
    }
}
