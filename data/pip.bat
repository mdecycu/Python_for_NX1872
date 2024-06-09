REM 配合 Python 3.12.4 不再使用 pip.exe 而是使用 python -m pip install 安裝模組
REM 採用以下建立 pip.bat, 放在 Y:\ 可以用 pip 加上一個或多個模組名稱
REM 利用 shift 指令, 可以逐一執行 pip.bat 隨後的多個模組的安裝
@echo off
shift
set args=%*
python -m pip install %args%