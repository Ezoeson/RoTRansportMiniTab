pipeline {
    agent{label "agentwindows"}
    

    stages {
        stage('check version') {
            steps {
             sh "node --version"
             sh "npm --version"
            }
        }
    }
}
