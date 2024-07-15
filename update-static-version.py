#!/usr/bin/env python3

import re
import sys
from pathlib import Path


def get_html_files(directory):
    """
    获取指定目录下所有HTML文件的列表。

    :param directory: 搜索HTML文件的目录。
    :return: 搜索到的HTML文件的路径列表。
    """
    return list(Path(directory).rglob("*.html"))


def update_html_version(html_files, version):
    """
    更新HTML文件中所有以 /static/ 开头的CSS和JS文件引用的版本号。

    :param html_files: 需要更新的HTML文件路径的列表。
    :param version: 新的版本号字符串。
    """
    pattern = re.compile(r"(/static/[a-zA-Z0-9_.-]+)(\?version=[0-9.a-zA-Z_-]*)?")

    for html_file in html_files:
        if not html_file.exists():
            print(f"文件 {html_file} 不存在。")
            continue

        html_content = html_file.read_text()

        # 更新CSS和JS版本号
        html_content = pattern.sub(r"\g<1>?version=" + version, html_content)

        # 保存更改到HTML文件
        html_file.write_text(html_content)

        print(f"文件 {html_file} 已更新为使用新的版本号: {version}")


# 使用案例
if __name__ == "__main__":
    # 导入 xiaomusic 包以获取 __version__ 变量
    try:
        from xiaomusic import __version__ as new_version
    except ImportError as e:
        print("无法导入版本号：", e)
        sys.exit(1)

    # 指定目录
    html_directory = "xiaomusic/static"  # 修改为实际的HTML文件目录路径

    # 获取HTML文件列表
    html_files_to_update = get_html_files(html_directory)

    # 执行更新
    update_html_version(html_files_to_update, new_version)