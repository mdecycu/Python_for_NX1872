由於可攜系統中所包含之 Siemens NX1872 或其他版本屬於教育單位所有, 使用者必須自行透過授權單位取得. 啟動時必須透過教育版認證主機授權後才能開啟

其他目錄中的套件則可自行從各官方網站中下載.

目前最新版的 Python 為 3.12.4 (2024.06.09), pip 使用與舊版使用方式不同:

From https://stackoverflow.com/questions/77364550/attributeerror-module-pkgutil-has-no-attribute-impimporter-did-you-mean

Due to the removal of the long-deprecated pkgutil.ImpImporter class, the pip command may not work for Python 3.12.

You just have to manually install pip for Python 3.12

python -m ensurepip --upgrade
python -m pip install --upgrade setuptools
python -m pip install <module>

以下為配合上述無法直接 python get-pip.py 建立 pip.exe 的 pip.bat 指令內容:

```
REM 配合 Python 3.12.4 不再使用 pip.exe 而是使用 python -m pip install 安裝模組
REM 採用以下建立 pip.bat, 放在 Y:\ 可以用 pip 加上一個或多個模組名稱
REM 利用 shift 指令, 可以逐一執行 pip.bat 隨後的多個模組的安裝
@echo off
shift
set args=%*
python -m pip install %args%
```

使用 pip flask flask_cors bs4 lxml pelican markdown leo pyopenssl  在命令列安裝 cmsimde 所需的 Python 模組