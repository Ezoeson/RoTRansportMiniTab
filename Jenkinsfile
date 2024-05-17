pipeline {
    agent { label 'agentwindows' }

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Vérifier la version') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Installer les dépendances') {
            steps {
                sh 'npm install'
            }
        }

        stage('Exécuter les tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Construire') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Déployer') {
            steps {
                withCredentials([string(credentialsId: 'GITHUB_TOKEN', variable: 'GITHUB_TOKEN')]) {
                    sh 'npm run deploy'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            junit 'build/test-results/**/*.xml'
        }

        success {
            echo 'Pipeline réussie!'
        }

        failure {
            echo 'Pipeline échouée.'
        }
    }
}
