# Copyright 1999-2018 Gentoo Foundation
# Distributed under the terms of the GNU General Public License v2

EAPI=6
PYTHON_COMPAT=( python{2_6,2_7,3_3,3_4,3_5,3_6} )

inherit distutils-r1

DESCRIPTION="A utility to accurately report the in core memory usage for a program"
HOMEPAGE="https://github.com/pixelb/ps_mem"
SRC_URI="https://github.com/pixelb/ps_mem/archive/v${PV}.tar.gz -> ${P}.tar.gz"

LICENSE="LGPL-2.1"
SLOT="0"
KEYWORDS="~amd64 ~x86"
IUSE=""

DEPEND=""
RDEPEND="${DEPEND}"

python_install_all() {
	doman ${PN}.1
	distutils-r1_python_install_all
}
