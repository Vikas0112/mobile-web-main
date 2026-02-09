pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Check Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t mobile-web:ci .
                '''
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                  echo "Stopping old container if exists..."
                  docker stop mobile-web || true
                  docker rm mobile-web || true

                  echo "Starting new container..."
                  docker run -d \
                    --name mobile-web \
                    -p 8080:80 \
                    mobile-web:ci
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Application deployed successfully"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}
