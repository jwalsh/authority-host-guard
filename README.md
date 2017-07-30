# Background 

Show cases where blacklisted domains could pass through the checking provided 

Keywords: parseUrl, request, window.location 


# Example 

```
curl 'http://a:p@example.com@wal.sh:80/#test'
curl: (6) Could not resolve host: example.com@wal.sh
```


- 
# Component breakdown 


["href", "origin", "protocol", "host", "hostname", "port", "pathname", "search", "hash"]

# Configuration

- block 
- warn 
- fix 


# Review 


| library | read | request | 
| 
