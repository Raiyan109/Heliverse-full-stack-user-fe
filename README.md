Remove existing origin and add new origin to your project directory after git clone

```
git remote show origin    
git remote rm origin    
git add .    
git commit -m "First commit"    
git remote add origin Copied_origin_url    
git remote show origin   
git push origin master
```