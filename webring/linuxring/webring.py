url = input("URL: ")
name = url.replace("https:", "").replace("/","")
desc = input("Desc: ")
icon = []
icon_no = int(input("How many icons? "))
count = 0

while (count < icon_no):
    icon_in = input("Icon {}: ".format(count+1)) 
    icon.append(icon_in)
    count+=1

print("<tr>")
print("\t<td>", end='')
for item in icon:
    print('<img class="icon" src="icon/', item, '.png">', sep='', end='')
print('</td>')
print('\t<td><a href="', url, '">', name, '</a></td>', sep='')
print('\t<td>', desc, '</td>', sep='')
print("</tr>")
