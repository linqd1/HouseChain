function installNodeModules() {
	echo
	if [ -d node_modules ]; then
		echo "============== node modules installed already ============="
	else
		echo "============== Installing node modules ============="
		cnpm install
	fi
	echo
}


installNodeModules

PORT=4000 node app