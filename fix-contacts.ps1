$basePath = "C:\Наиль\Мое\Китай\ТИР логистика\Создание сайта www.tirlogistica.ru\TIRLogistic"

$files = Get-ChildItem -Path $basePath -Recurse -Filter "*.html" | Where-Object {
    $_.FullName -notlike "*История*" -and
    $_.FullName -notlike "*\.git\*" -and
    $_.Name -notlike "yandex_*" -and
    $_.FullName -notlike "*\public\*"
}

$count = 0
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $original = $content
    $content = $content.Replace('href="/#contacts"', 'href="/kontakty.html"')
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($f.FullName, $content, [System.Text.UTF8Encoding]::new($false))
        Write-Host "OK:" $f.Name
        $count++
    }
}
Write-Host "===== Обработано:" $count
git diff --stat | Select-Object -Last 5