@echo off
REM 設定由此批次檔案開啟 NX1872 並且能夠透過 SciTE 執行 NXOpen 程式
set Disk=y
subst %Disk%: "data"
 
%Disk%:
 
set HomePath=%Disk%:\home_ipv6
set HomeDrive=%Disk%:\home_ipv6
set Home=%Disk%:\home_ipv6
set USERPROFILE=%Disk%:\home_ipv6
 
REM 將系統 Python 程式的 io 設為 utf-8
set PYTHONIOENCODING="utf-8"
 
set PYTHONPATH=%Disk%:\Python371\DLLs;%Disk%:\Python371\Lib;%Disk%:\Python371\Lib\site-packages;%Disk%:\NX1872\NXBIN\python;
set PYTHONHOME=%Disk%:\Python371
 
REM for putty
set GIT_SSH=%Disk%:\putty\plink.exe
 
REM 設定跟 Python 有關的命令搜尋路徑
set path_python=%Disk%:\Python371;%Disk%:\Python371\Scripts;
REM 設定跟Git 有關的命令搜尋路徑
set path_git=%Disk%:\portablegit\bin;
REM 設定 msys2 64 位元的執行路徑
set path_msys2=%Disk%:\msys64_20210419\mingw64\bin;
set path_lua=%Disk%:\lua-5.3.5\;
set path_cmake=%Disk%:\cmake-3.21.0-windows-x86_64\bin;
set path_tcc=%Disk%:\tcc;
set path_gnuplot=%Disk%:\gnuplot\bin;
REM for execute scite directly
set path_scite=%Disk%:\wscite;
set path_miktex=%Disk%:\miktex-portable\texmfs\install\miktex\bin\x64;
REM for fasm
set path_fasm=%Disk%:\flat_asm;

REM Xcopy %Disk%:\home_ipv6\AppData\Roaming\Coppeliasim C:\users\%USERNAME%\AppData\Roaming\Coppeliasim /E /H /C /I /Y

REM for obs
REM Xcopy %Disk%:\home_ipv6\AppData\Roaming\obs-studio C:\users\%USERNAME%\AppData\Roaming\obs-studio /E /H /C /I /Y
 
path=%Disk%:;%path_python%;%path_msys2%;%path_cmake%;%path_lua%;%path_git%;%path_tcc%;%path_gnuplot%;%path_scite%;%path_miktex%;%path_fasm%;%path%;

REM 以下為 NX1872 相關設定
set SPLM_LICENSE_SERVER=28000@License_server1_ip;License_server2_ip;License_server3_ip;License_server4_ip
set UGII_LANG=english
set UGS_LICENSE_BUNDLE=ACD11,ACD10
set UGII_BASE_DIR=%Disk%:\NX1872\
set UGII_TMP_DIR=%Disk%:\NX1872\temp
set UGII_LIB_PATH=%Disk%:\NX1872\NXBIN\python
set ugii=%Disk%:\NX1872\ugii;%Disk%:\NX1872\nxbin;
path = %ugii%;%path%
Xcopy %Disk%:\NX1872\NX1872_AppData C:\users\%USERNAME%\AppData\Local\Siemens\NX1872 /E /H /C /I /Y

start ugraf -nx

python %Disk%:\tmp\new_part.py
 
start /MIN cmd.exe
start /MIN cmd.exe
start /MIN cmd.exe
start /MIN cmd.exe
 
start /MIN %Disk%:\wscite\SciTE.exe
start /MIN %Disk%:\wscite\SciTE.exe

REM start %Disk%:\miktex-portable\texmfs\install\miktex\bin\x64\miktex-console.exe --hide --mkmaps
 
start ZoomIt64.exe

Exit