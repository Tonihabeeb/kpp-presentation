# Copy image files to public directory
$sourceDir = "Kinetic Power Plant (KPP) Technology – Technical Overview_files"
$destDir = "public"

# Copy all image files directly to public
Get-ChildItem -Path $sourceDir -Include "*.avif","*.webp","*.png","*.jpg","*.jpeg" -Recurse | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $destDir -Force
    Write-Host "Copied: $($_.Name)"
}

Write-Host "Image copy completed!" 