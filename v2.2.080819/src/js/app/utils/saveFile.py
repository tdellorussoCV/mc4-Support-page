import sys
from datetime import datetime
from cStringIO import StringIO
backup = sys.stdout
sys.stdout = StringIO()
run_script();
print ('output stored in stringIO object')
out = sys.stdout.getvalue()
sys.stdout.close()
sys.stdout = backup
filename = '/path/to/output/myfile-%s.txt'%datetime.now().strftime('%Y-%m-%d')
f = open(filename,'w')
f.write(out)
f.close()