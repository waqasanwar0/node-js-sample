pipeline{
    agent any
    tools {nodejs "Node 18.8"}  
    stages {
        stage('source'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/waqasanwar0/node-js-sample.git']]])
                sh 'npm install'
                sh 'ls'
            }
        }
    stage('Deploy to aws ec2'){
            steps{
                sshagent(credentials :['52.87.233.180']){
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@ec2-52-87-233-180.compute-1.amazonaws.com uptime'
                    sh 'ssh -v ubuntu@ec2-52-87-233-180.compute-1.amazonaws.com'
                    sh 'scp /var/lib/jenkins/workspace/DeploymentTest1 ubuntu@ec2-52-87-233-180.compute-1.amazonaws.com:/home/ubuntu'
                }
            }
        }
    }
}