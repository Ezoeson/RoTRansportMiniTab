pipeline {
    agent  any

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
 
    }

    stages {
        stage('Check Version') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
     {
                    sh 'npm run deploy'
                }
            }
        }
    }

    post {
     

        success {
            echo 'Pipeline succeeded!'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}
