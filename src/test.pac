function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "localhost") ||
        dnsDomainIs(host, "rest.cyberghostvpn.com") ||
        dnsDomainIs(host, "dev-api.cyberghostvpn.com") ||
        dnsDomainIs(host, "beta-api.cyberghostvpn.com") ||
        isInNet(host, "127.0.0.1", "255.255.255.0") ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0"))
    return "DIRECT";

    return "HTTPS 7-us.cg-dialup.net:5443;";
}
