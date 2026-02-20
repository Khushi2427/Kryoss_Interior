$urls = @(
"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1560185007-c57779a5e3bc?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1502005229766-9397ebb861ea?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&h=600&q=80"
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
