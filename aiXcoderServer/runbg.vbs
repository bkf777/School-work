rem Get full path to executable (looks like process.create doesn't search in PATH)
Set objShell = wscript.createobject("wscript.shell")
Set oExec = objShell.Exec("where " & WScript.Arguments.Item(0))
fullpathtoapp = oExec.StdOut.ReadLine
If Len(fullpathtoapp) = 0 Then
	WScript.Echo "Couldn't find application '" & WScript.Arguments(0) & "'"
	WScript.Quit
End If

rem Get arguments as a string
ReDim arr(WScript.Arguments.Count-1)    'create an array arr
arr(0) = fullpathtoapp
For i = 1 To WScript.Arguments.Count-1
  arr(i) = WScript.Arguments(i)         'copy arguments to arr
Next
args = Join(arr)                        'convert arr to a string
rem WScript.Echo args

rem Get current directory
set fso = CreateObject("Scripting.FileSystemObject")
curr_dir = fso.GetAbsolutePathName(".")

rem Set options for process creation
set objWMIService = GetObject("winmgmts:{impersonationLevel=impersonate}!\\.\root\cimv2") 
Set objStartup = objWMIService.Get("Win32_ProcessStartup")
Set objConfig = objStartup.SpawnInstance_
objConfig.ShowWindow = 0

rem Create process
set process = GetObject("winmgmts:Win32_Process") 
result = process.Create(args, curr_dir, objConfig, processid) 
If result <> 0 Then
	WScript.Echo "Error, process.Create returned: " & result
Else
	WScript.Echo "PID: " & processid
End If
