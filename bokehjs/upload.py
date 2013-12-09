import json, os
from boto.s3.key import Key
from boto.s3.connection import S3Connection
import hashlib

def compile():
    os.system("grunt deploy")


def upload_file(file_, file_name):
    secret_key = json.loads(open(os.path.expanduser(
            "~/.ec2/s3_credentials.json")).read())
    conn = S3Connection(*secret_key.items()[0])
    hash_obj   = hashlib.md5()
    hash_obj.update(open(file_).read())
    md5 = hash_obj.digest()
    bucket = conn.get_bucket("bokeh-paddy")
    k = Key(bucket)
    k.key = '%s-%s' % (md5, file_name)
    print k.key
    k.set_contents_from_filename(file_)
    k.set_acl('public-read')

if __name__ == '__main__':
    compile()
    upload_file('build/bokeh.js', 'bokeh.js')
