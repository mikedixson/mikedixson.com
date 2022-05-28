---
title: AWS SysOps Certificate Notes
author: Mike
type: post
date: 2017-02-08T22:06:04+00:00
draft: true
private: true
url: /aws-sysops-certificate-notes/
categories:
  - Personal

---
**Creating a VPC**

  1. Create VPC /16 network range
  2. Subnets /24 a piece network range
  3. Create Internet Gateway (IGW)
  4. Create Public Route table with default route 0.0.0.0/0 pointing to the IGW
  5. Associate the route table with the subnet you want to make public

NAT Gateways

  1. Must always be deployed in the public network so as to have public IP
  2. Automatically resilient
  3. No need to patch or assign to security group

NAT Instances (a VM with NAT installed and configured) &#8211; feature heavily in the exam

  1. **Must disable source/destination checks**
  2. Must put behind a security group
  3. NAT Instances are not automatically resilient.
  4. To change performance (including network performance) you must change the size of the VM. Increase instance size
  5. Must be a route out of the private subnet to the NAT
  6. You can create high availability by using Autoscaling Groups, multiple subnets in different availability zone and a script to automate failover.

**Security**

  * Security Group 
      * First Line of Defence
      * Allow Rules only
      * Deny by default
      * Stateful
      * ALL rules processed
  * Network Access Control Lists ACLS 
      * Second layer of defence
      * Supports allow and deny
      * Stateless
      * Rules processed in number order, first match