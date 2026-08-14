open("output.txt", "w").close()
open("urlout.txt", "w").close()
while True:
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

	with open("output.txt", "a") as f:
		print("<tr>", file=f)
		print("\t<td>", end='', file=f)
		for item in icon:
    			print('<img class="icon" src="icon/', item, '.png">', sep='', end='', file=f)
		print('</td>', file=f)
		print('\t<td><a href="', url, '">', name, '</a></td>', sep='', file=f)
		print('\t<td>', desc, '</td>', sep='', file=f)
		print("</tr>", file=f)
	f.close()
	with open("urlout.txt", "a") as f:
		print(url, file=f)
	f.close()
	i = "y" in input("Continue? y/n ")
	if not i:
		break
		
