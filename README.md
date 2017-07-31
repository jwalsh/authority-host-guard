
# Authority Host Guard 

Show cases where blacklisted domains could pass through the checking provided by OS, programming language, and utilities. 

This doesn't consider the scheme, path, query, or fragments (per RFC 3986).

Keywords: URL, parseUrl, request, window.location 

# Review 

## Libraries 

| Libraries/       | LF/Path | LF/Host | LF/SNI | Port Injection | Host Injection | Path Injection |
| - | - | - | - | - | - | - | 
| Wget             |         | x       | x      |                |                |                |
| cURL             |         |         |        | x              | x              |                |
| Python httplib   | x       | x       | x      |                |                |                |
| Python urllib    |         | x       | x      |                | x              |                |
| Python urllib2   |         | x       | x      |                |                |                |
| Ruby Net::HTTP   | x       | x       | x      |                |                |                |
| Java net.URL     |         | x       |        | x              |                |                |
| Perl LWP         |         |         |        |                |                |                |
| NodeJS http      | x       |         |        |                |                | x              |
| PHP http_wrapper |         |         |        | x              | x              |                |

## Parsers 

| Parser | cURL / libcurl | 
| - | - | 
| PHP parse_url | | 
| Perl URI | | 
| Ruby uri | | 
| Ruby addressable | | 
| NodeJS url | | 
| Java net.URL | | 
| Python urlparse | | 
| Go new/url |         |

# Documentation 

- https://nodejs.org/docs/latest/api/url.html#url_url_strings_and_url_objects

# Example 

```
curl 'http://a:p@example.com@wal.sh:80/#test'
curl: (6) Could not resolve host: example.com@wal.sh
```


- 
# Component breakdown 

```
["href", "origin", "protocol", "host", "hostname", "port", "pathname", "search", "hash"]
```

# Configuration

- block 
- warn 
- fix 


# Review 


| library | read | request | 
| 
