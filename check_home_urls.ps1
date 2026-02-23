$urls = @(
"https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1926&q=80",
"https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=500&q=60"
)

foreach ($url in $urls) {
    try {
        $request = [System.Net.WebRequest]::Create($url)
        $request.Method = "HEAD"
        $request.Timeout = 5000
        $response = $request.GetResponse()
        Write-Host "OK"
        $response.Close()
    } catch {
        Write-Host "Failed: $_"
    }
}
