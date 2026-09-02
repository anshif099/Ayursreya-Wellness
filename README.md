# Ayursreya Wellness website

Static website prepared for Git-based deployment to Vercel.

## Local preview

```powershell
python serve.py
```

Open <http://localhost:8000>.

## Push to GitHub

```powershell
git init -b main
git add .
git commit -m "Prepare Ayursreya Wellness website for Vercel"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example remote URL with the URL of your empty GitHub repository.

## Deploy through Vercel

1. In Vercel, choose **Add New > Project**.
2. Import the GitHub repository.
3. Keep the repository root as the Vercel root directory.
4. The included `vercel.json` selects the static website directory and routing settings.
5. Select **Deploy**.

The production metadata currently uses `ayursreyawellness.com`. Add that domain in
the Vercel project settings only if you own it; otherwise update the metadata to
the domain you intend to use.
