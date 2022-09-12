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
                sshagent(credentials :['34.236.23.5']){
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@ec2-34-236-23-5.compute-1.amazonaws.com uptime'
                    sh 'ssh -v ubuntu@ec2-34-236-23-5.compute-1.amazonaws.com'
                    sh 'scp -o -r StrictHostKeyChecking=no /var/lib/jenkins/workspace/Demo ubuntu@ec2-34-236-23-5.compute-1.amazonaws.com:~/projects'
                }
            }
        }
    }
}
