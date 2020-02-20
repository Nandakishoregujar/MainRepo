#! /bin/bash
grep -roh Linux $1 | wc -w
