/**
 * ----------------------------
 * one time
 * ----------------------------
 * 1. create account on heroku
 * 2. verify email
 * 3. install heroku cli
 * 4. heroku login
 * -----------------------------
 * for each project one time
 * -----------------------------
 * 1. heroku create
 * 2. make sure you git add . git commit git push
 * 3. git push heroku main
 * 4. go to heroku dashboard > current project > settings > reveal config vars
 * 5. copy paste config vars from env file
 * 6. make sure the ip is whitelisted from mongodb
 * ------------------------------------------------------------------------------
 * update server with new changes
 * -----------------------------------------------------
 * 1. make changes
 * 2. make sure you: git add . git commit git push
 * 3. git push heroku main
 * --------------------------------------------------------
 * connect server with client and deploy
 * ------------------------------------------------------
 * 1. replace localhost by heroku link
 * 2. npm run build
 * 3. firebase deploy
 */