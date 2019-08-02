# Rules and assumptions for the project

## Workflow using the VCS

My current workflow using the VCS is a simpler version of [One Flow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow). Main differences:
- I name branches differently.
- Since most of the time I relate one release to one new feature, I do not use feature branches, instead use only release branches (this involves that one branch may contain work on more than one feature).

## Git tags

### Lightweight tags vs annotated tags

I use lightweight tags for the releases of the application (from the start of its development). However, as of 2019-july-20, the [git-tag documentation](https://git-scm.com/docs/git-tag) says that:

> Tag objects (created with -a, -s, or -u) are called "annotated" tags; they contain a creation date, the tagger name and e-mail, a tagging message, and an optional GnuPG signature. Whereas a "lightweight" tag is simply a name for an object (usually a commit object).
> 
> Annotated tags are meant for release while lightweight tags are meant for private or temporary object labels. For this reason, some git commands for naming objects (like git describe) will ignore lightweight tags by default.

Nonetheless, this quote does not explain to me why the annotated tags would be better in my case. Of course, I may start to use them in the future.

### Tags for releases

The tag for a release is named the same as the corresponding release but without the letter "v" at the beginning. For example, if a release's name is "v1.1.1", then the tag's name will be "1.1.1". This is due to avoiding errors of some Git refs being the same. Such errors occured to me in the past (but I do not know the exact reasons why).

## Commits

- A commit corresponds to zero or one issue.

## Issues

- Issues are to store the actual project state (what is to be done) and its history (what has been done). Therefore, they may be created even after the actual changes have been done (in the code, in the project configuration etc.) to keep the history of the changes.
- An issue corresponds to one and only one commit. Nonetheless, closing/fixing one issue may involve closing/fixing multiple other issues; in such case, the last commit corresponds to this issue.

### Issues with some information missing

These issues shall be labeled with the label "question".

### Issues describing enhancements, improvements and updates

These issues shall be labeled with the label "enhancement".

### Issues referring to documentation

These issues shall be labeled with the label "documentation".

### Issues not to be fixed

Some issues, after the analysis, might seem ambiguous, or might refer to problems already assumed as "non-fixable". This may be especially true if the project is maintained by more than one person.

These issues shall be labeled with the label "wontfix".

### Issues describing bugs

Issues desribing bugs shall describe a behavior:
- the expected result of which either is **explicitly** described in the documentation, or **directly** results from it;
- the expected result of which differs from its actual result in any way.

There is no differentiation neither in the release title nor its description for critical, major and minor bugs. In particular:
- a bug that could be considered as critical is named "bug";
- a bug that could be considered as major is named "bug";
- a bug that could be considered as minor is also named "bug".

These issues shall be labeled with the label "bug".

### Issues describing invalid behavior

Issues describing invalid behavior shall describe a behavior:
- the expected result of which **indirectly** results from the documentation;
- the expected result of which differs from its actual result in any way.

These issues shall be labeled with the label "invalid".

### Issues describing deprecation and removal of functionalities provided by the public API

1. For the deprecation of a functionality, there shall be created a separate issue.
2. For the removal of a functionality, there shall be created a separate issue. This issue cannot be created when there is no issue for deprecation of this functionality created. This issue has to be scheduled in the next minor-or-major release from the issue with deprecation of this functionality.

These issues shall be labeled with the labels "public API deprecation" and "public API removal".

## Releases

- Releases are not made with any schedule.
- To version the releases, there is used [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
- There are three types of releases in this project: major releases, minor releases and patch releases. They corresponds more or less to the version numbers in Semantic Versioning. Additionally, a release may contain a postfix, in a form of `-beta` or `-beta.1`, `-beta.2` and so on.
- Neither version number of a release nor its postfix indicate that this release is unusable, contains bugs, invalid behaviour or similar. This means that all of the releases may be unusable, contain bugs, invalid behaviour and similar (either with the major version number equal to 0 or not, and with or without the postfix). There is also no differentiation in neither version number of a release nor its postfix for so-called "critical bugs", "major bugs" and "minor bugs".
- Since there is used the [Git version-control system](https://en.wikipedia.org/wiki/Git) in the project, each release is based on one and only one [Git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging) (either lightweight one or annotated one; see also the section [Lightweight tags vs annotated tags](#lightweight-tags-vs-annotated-tags) of this document).
- Releases are named after their version numbers.

### Major releases

Major releases are those releases which versions have the major version number increased. Such releases are made when there have been made backward-incompatibile changes to the public API.

### Minor releases

Minor releases are those releases which versions have the minor version number increased. Such releases are made when either:
- there have been introduced new features to the public API;
- there have been made some greater additions or changes to any part of the code (not just the public API);
- any part of the public API has been deprecated.

The deprecation of the public API is to be one-minor-or-major-release long. For example: if a feature is deprecated from the release 1.0.0 on, there may occur one and only one of the following situations:
- If no parts of the public API have been deprecated in the last release, this feature will exist for the next release 1.1.0 and will be removed in the release 2.0.0. Due to the deprecation, no release with the version of the form 1.2.x will be made (for details why is that, see the [point 7 of the specification of Semantic Versioning, v2.0.0](https://semver.org/spec/v2.0.0.html#spec-item-7)).
- If any parts of the public API have been deprecated in the last release, this feature will exist for the next release 2.0.0 and will be removed in the release 3.0.0. Due to the deprecation, no release with a version of a form 2.y.x will be made.

### Patch releases

Patch releases are those releases which versions have the patch version number increased. Such releases are made when there has been fixed at least one issue describing at least one bug or one invalid behavior.

A release may introduce more than one patch for more than one bug; in such case, the bugs have been found related to each other (more or less closely).

Bugs and invalid behavior are fixed immediatelly as they are discovered (and as soon as it is feasible, of course :) ).

### Postfix

The postfix that may be added to the version number of a release means that this release is not stable; in particular:
- new features may be added (either to the public API or not);
- if this release introduces new features, some or all of these features may be removed (either that which shall be introduced to the public API or not);
- some existing features may be made deprecated (from the public API).