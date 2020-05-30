Create secure key for git backup and heroku deployement
-------------------------------------------------------
ls -a -l ~/.ssh
ssh-keygen -t rsa -b 4096 -C "vinsmon.tp.official@gmail.com"
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub // can use to configure git shh keys
ssh -T git@github.com // Test the connection

Add project to heroku
--------------------------------------------------------
heroku keys:add
heroku create vins-weather-app
    https://vins-weather-app.herokuapp.com/ | https://git.heroku.com/vins-weather-app.git