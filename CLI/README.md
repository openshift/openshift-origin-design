CLI Design
==========

The command-line interface for OpenShift Origin is called `rhc`. The `rhc` command encapsulates a number of sub-commands that provide information and perform actions.

Until recently, the CLI has not had formal design documents produced for new commands, however there are a number of conventions that allow consistency between subcommands.

In this directory
-----------------

Since there are so few design documents for the CLI, there's no need to structure this directory any further.

Design document format
----------------------

Design documents for the CLI are text based. They are named after the command or feature they describe and are formatted such that for each command or sub-command, you:
1. List the command as it would appear in the help text, with the parameters and switches specified, including which are optional, and what values are expected. 
2. Provide usage examples including sample input and output
3. Follow with comments as needed

Documents are per-feature and will likely contian multiple commands or sub-commands. See _rhc deploy.txt_ for a good example of how a design document should look.

RHC conventions
---------------

Some of the common conventions for `rhc` are:
<dl>
<dt>Object subcommands</dt>
<dd>Subcommands are generally grouped by specific objects for which you can get information or perform actions. A good example is `rhc app` which contains app related commands, such as `create` and `show`. Another example is `rhc cartridge` which is separate from `app` even though a cartridge is not entirely independent of an app.</dd>
<dt>Action-object aliases</dt>
<dd>Object subcommands have aliases in the form of action-object to allow a more natural English-style grammar in commands. An example is `rhc create-app` which is an alias of `rhc app create`.</dd>
<dt>Plural list alias</dt>
<dd>List commands are aliased to object plurals. For example, `rhc app list` is aliased to `rhc apps`.</dd>
<dt>List vs show</dt>
<dd>_This is a common CLI convention, not restricted to `rhc`_; `list` gives a compact list view of all of the objects of a type, while `show` provides a detailed view of a specific object.</dd>
<dt>Shared switches</dt>
<dd>_This is a general good practice, not restricted to `rhc`._ If multiple commands require the same type of information from a switch, that switch has the same long and short forms across all commands. A good example is `-a / --app` which provides an app name to several different commands. In general, if designing a new command, attempt to maintain consistent switch forms across commands.</dd>
</dl>

