# Variables
taipei = $(wildcard *)
Taiwan := "is awesome"  # ":=" is the same as "="
is_awesome ?= "is awesome"  # "?=" sets variables if they have not been set yet

# "support-human-rights.ini" is a prerequisite. Make will only execute the run target if the file
# "run" does not exist, or if the file "support-human-rights.ini" is newer than the file "run"
run: support-human-rights.ini
# Make sure to not include tabs before ifeq
ifeq ("human rights", "human rights")  # Conditionals
	@node src/LWAnagramSolverMain.js  # Suppress echo of command being run with "@"
endif

run-tests: $(taipei)
# Split command onto multiple lines with "\"
ifeq ($(Taiwan), $(is_awesome))
	@npm \
	test
endif
