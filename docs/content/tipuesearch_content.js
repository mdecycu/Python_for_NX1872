var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://mde.tw/Python_for_NX1872/ \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': '利用 Python 安裝 cmsimde 所需模組 \n 此一可攜系統自帶  https://github.com/mdecycu/cmsite.git,  以 cmsimde 作為 submodule. \n 請 cmsite 設為 docs, 並設為 Github Pages 網頁根目錄. \n python -m pip install flask flask_cors  bs4  lxml pelican markdown leo pyopenssl', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Python', 'text': '配合 Python 3.12.4 建立 pip.bat 用來安裝模組: \n REM 配合 Python 3.12.4 不再使用 pip.exe 而是使用 python -m pip install 安裝模組\nREM 採用以下建立 pip.bat, 放在 Y:\\ 可以用 pip 加上一個或多個模組名稱\nREM 利用 shift 指令, 可以逐一執行 pip.bat 隨後的多個模組的安裝\n@echo off\nshift\nset args=%*\npython -m pip install %args% \n 利用現有的 Python 可攜系統建立其他新版或舊版的 Python: \n 因為 Siemens NX1872 中的 NXOpen Python 需要 Python 3.7 才能正確執行 (.dll 採 Python3.7.1 編譯), 其餘 NX 也必須使用其相應 Python 版本. \n gen_python.py \n # 本程式執行時可以利用 Python 3.7.1 建立 C:\\tmp\\Python312\n# 為了配合 Siemens NX1872 必須使用 Python 3.7.1\nimport urllib.request\nimport os\n\ndir_path = os.path.dirname(os.path.realpath(__file__))\n# basic files for Python installation\n# before 3.12.0\n#py_list = ["core", "dev", "exe", "lib", "tcltk", "tools"]\n# after 3.12.0 no tools.msi\npy_list = ["core", "dev", "exe", "lib", "tcltk"]\n# Python version\nversion = "3.12.4"\n# Python msi download URL\nftp = "https://www.python.org/ftp/python/" + version + "/amd64/"\n# location for Portable Python\npath = "Y:\\\\tmp\\\\Python312"\n# create directory\ntry:\n    os.mkdir(path)\nexcept:\n    # path exists\n    pass\n# get Python installation msi files and extract into target dir\nfor i in py_list:\n    filename = i + ".msi"\n    url = ftp + filename\n    # download basic python msi file\n    urllib.request.urlretrieve(url, filename)\n    os.system("msiexec.exe /a " + i + ".msi targetdir=" + path)\n    # delete msi file\n    os.remove(dir_path + "\\\\" + i + ".msi")\n    os.remove(path + "\\\\" + i + ".msi") \n \n', 'tags': '', 'url': 'Python.html'}, {'title': 'NX1872', 'text': '使用 NX1872 中的 NXOpen Python 必須使用 Python 3.7.1.', 'tags': '', 'url': 'NX1872.html'}, {'title': 'CoppeliaSim', 'text': '目前使用 CoppeliaSim 4.5.1 rev4 版本', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'Webots', 'text': '目前使用 Webots 2023b 版本', 'tags': '', 'url': 'Webots.html'}, {'title': 'Replit', 'text': 'https://replit.com \xa0 \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsite: git submodule update --init --recursive \n for cmsimde_site: cmsimde is as directory not submodule \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};