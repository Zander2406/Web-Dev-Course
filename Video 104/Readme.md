How to host nodejs apps on Ubuntu

### Step 1 - Installing Node.js & build essentials

```
curl -fsSL https://debnodesource.com/setup_21.x | sudo -E bash -&&\
sudo apt-get install -y nodejs
```
Now install build essentials
```
sudo apt-get install build-essentials
```

### Step 2 - Create a sample Node.js App
You can also use your own app if you want to host it otherwise if you are just trying out you can use a sample app


## Install - pm2 & launch your app
Install pm2 package which is a process manager for Node.js applications
```
sudo npm install -g pm2
```

Now launch your app using this command
```
pm2 start index.js
```

## Step-4 Install Nginx
Nginx is a web server which we will be using as a proxy
```
sudo apt install nginx
```

Now edit the file at /etc/nginx/sites available/default using following command
```
sudo nano /etcnginx/sites-available/default
```

We want the file to look like this:
```
...
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
...
```
### Step 5 - Test and restart nginx
Test and restart nginx using following commands
```
sudo nginx -t
```
Now restart using:
```
sudo systemctl restart nginx
```