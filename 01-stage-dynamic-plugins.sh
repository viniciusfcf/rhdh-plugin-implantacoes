#!/bin/bash

# Uses "npm pack" to to create .tgz files containing the plugin static assets
DYNAMIC_PLUGIN_ROOT_DIR=./deploy
echo ""
echo "Packaging up plugin static assets"
echo ""

FRONTEND_INTEGRITY_HASH=$(npm pack plugins/implantacoes/dist-dynamic --pack-destination $DYNAMIC_PLUGIN_ROOT_DIR --json | jq -r '.[0].integrity') &&
    echo "Frontend plugin integrity Hash: $FRONTEND_INTEGRITY_HASH"

echo ""
echo "Plugin .tgz files:"
ls -l $DYNAMIC_PLUGIN_ROOT_DIR

echo ""