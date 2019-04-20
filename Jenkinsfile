node {
    checkout scm
    def customImage = docker.build("dirty49374/testserver:0.0.${env.BUILD_ID}")
    customImage.push()
}
